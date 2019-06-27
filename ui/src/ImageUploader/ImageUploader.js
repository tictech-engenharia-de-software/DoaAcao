import React, { useState } from "react";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import styled from 'styled-components';
import { withFirebase } from 'react-redux-firebase'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FileUploader from "react-firebase-file-uploader";

const FileUploaderContainer = styled.div`
margin-top:12px;
`;

const StyledLabel= styled.label`
background-color: #3f51b5;
color: white;
padding: 10;
border-radius: 4px;
pointer: cursor;
display:flex;
align-items:center;
justify-content:space-around;
`;

const ProgressContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:24px;
`;

const StyledImage = styled.img `
max-width:100%;
max-height:100%;
`;

const DownloadProgess = ({progress}) =>(
	<ProgressContainer>
		<CircularProgress variant="determinate" value={progress}/>
	</ProgressContainer>
);

const ImageUploader = ({firebase, imageURL, setImageURL}) => {
	const [avatar, setAvatar] =  useState("")
	const [isUploading, setIsUploading] =  useState(false)
	const [progress, setProgress] =  useState(0)

	const handleUploadStart = () => {
		setIsUploading(true)
		setProgress(0)
	};

	const handleUploadError = error => {
		setIsUploading(false)
		console.error(error);
	};

	const handleUploadSuccess = filename => {
		setAvatar(filename)
		setProgress(100)
		setIsUploading(false)
		firebase
			.storage()
			.ref("images")
			.child(filename)
			.getDownloadURL()
			.then(url => setImageURL(url));
	};
	return (
		<FileUploaderContainer>
			{isUploading && <DownloadProgess progress={progress}/> }
				{imageURL && <StyledImage src={imageURL} />}
				<StyledLabel>
					<CloudUploadIcon/>Imagem do evento
					<FileUploader
						hidden
						accept="image/*"
						name="avatar"
						randomizeFilename
						storageRef={firebase.storage().ref("images")}
						onUploadStart={handleUploadStart}
						onUploadError={handleUploadError}
						onUploadSuccess={handleUploadSuccess}
						onProgress={(num,_) => setProgress(num)}
					/>
				</StyledLabel>
		</FileUploaderContainer>
	);
}

export default withFirebase(ImageUploader);
