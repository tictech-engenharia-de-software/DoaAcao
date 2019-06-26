import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";

const ImageUploader ({firebase}) => {
	const [avatar, setAvatar] =  useState("")
	const [isUploading, setIsUploading] =  useState(false)
	const [progress, setProgress] =  useState(0)
	const [avatarURL, setAvatarURL] =  useState("")

	handleUploadStart = () => {
		setIsUploading(true)
		setProgress(0)
	};

	handleUploadError = error => {
		setIsUploading(false)
		console.error(error);
	};

	handleUploadSuccess = filename => {
		setAvatar(filename)
		setProgress(100)
		setIsUploading(false)
		firebase
			.storage()
			.ref("images")
			.child(filename)
			.getDownloadURL()
			.then(url => setAvatarURL(url));
	};

	return (
		<div>
			<form>
				<label>Avatar:</label>
				{isUploading && <p>Progress: {progress}</p>}
				{avatarURL && <img src={avatarURL} />}
				<FileUploader
					accept="image/*"
					name="avatar"
					randomizeFilename
					storageRef={firebase.storage().ref("images")}
					onUploadStart={handleUploadStart}
					onUploadError={handleUploadError}
					onUploadSuccess={handleUploadSuccess}
					onProgress={setProgress}
				/>
			</form>
		</div>
	);
}

export default ProfilePage;
