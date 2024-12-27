"use client"
import Image from "next/image";
import { useState, ChangeEvent } from "react";

const ImageUpload: React.FC = () => {
  const [uploadImgUrl, setUploadImgUrl] = useState<string>("");

  const onchangeImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const uploadFile = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        if (reader.result) {
          setUploadImgUrl(reader.result as string);
        }
      };
    }
  };

  const downloadImage = () => {
    if (uploadImgUrl) {
      const link = document.createElement("a");
      link.href = uploadImgUrl;
      link.download = "downloaded_image.png"; // 다운로드 파일 이름
      link.click();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input 
        type="file" 
        accept="image/*" 
        onChange={onchangeImageUpload} 
        style={{ marginBottom: "20px" }}
      />
      
      {uploadImgUrl && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
          {/* 업로드된 이미지 */}
          <div style={{ textAlign: "center" }}>
            <h4>Uploaded Image</h4>
            <Image 
              src={uploadImgUrl} 
              alt="uploaded" 
              width={150} 
              height={150} 
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          
          {/* 화살표 */}
          <div style={{ fontSize: "24px" }}>➡️</div>
          
          {/* 다운로드할 이미지 */}
          <div style={{ textAlign: "center" }}>
            <h4>Downloadable Image</h4>
            <Image 
              src={uploadImgUrl} 
              alt="downloadable" 
              width={150} 
              height={150} 
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}

      {/* 다운로드 버튼 */}
      {uploadImgUrl && (
        <button 
          onClick={downloadImage} 
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download Image
        </button>
      )}
    </div>
  );
};

export default ImageUpload;