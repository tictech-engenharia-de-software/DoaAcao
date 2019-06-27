import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';
import Images from './Image';
import Buttons from './SendButton';
import WakeUp from './WakeUp';

const toastColor = { 
  background: '#505050', 
  text: '#fff' 
}

export default class Uploader extends Component {
  
  state = {
    uploading: false,
    images: []
  }

  toast = notify.createShowQueue()

  onChange = e => {
    const errs = [] 
    const files = Array.from(e.target.files)

    if (files.length > 1) {
      const msg = 'Apenas 1 imagem pode ser submetida.'
      return this.toast(msg, 'custom', 2000, toastColor)  
    }

    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' não é um formato suportado`)
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' é muito grande, escolha uma imagem menor`)
      }

      formData.append(i, file)
    })

    if (errs.length) {
      return errs.forEach(err => this.toast(err, 'custom', 2000, toastColor))
    }

    this.setState({ uploading: true })

  }

  filter = id => {
    return this.state.images.filter(image => image.public_id !== id)
  }

  removeImage = id => {
    this.setState({ images: this.filter(id) })
  }

  onError = id => {
    this.toast('Oops, algo de errado não está certo!', 'custom', 2000, toastColor)
    this.setState({ images: this.filter(id) })
  }


  
  render() {
    const { uploading, images } = this.state
    
    const content = () => {
      switch(true) {
        case uploading:
          return <div> carregando... </div>
        case images.length > 0:
          return <Images 
                  images={images} 
                  removeImage={this.removeImage} 
                  onError={this.onError}
                 />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div className='container'>
        <Notifications />
        <div className='buttons'>
          {content()}
        </div> 
      </div>
    )
  }
}