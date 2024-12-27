import React, {
    useState,
    useCallback,
    ChangeEvent,
    useRef,
  } from "react";
  import Image from "next/image";
  
  const DragDrop = () => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = useState<string>("");
    const dragRef = useRef<HTMLLabelElement | null>(null);
  
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = () => {
          if (reader.result) {
            setImageSrc(reader.result as string);
          }
        };
      }
    };
  
    const handleDragEnter = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
    }, []);
  
    const handleDragLeave = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    }, []);
  
    const handleDrop = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
  
      const files = e.dataTransfer.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = () => {
          if (reader.result) {
            setImageSrc(reader.result as string);
          }
        };
      }
    }, []);
  
    const downloadImage = () => {
      if (imageSrc) {
        const link = document.createElement("a");
        link.href = imageSrc;
        link.download = "downloaded_image.png";
        link.click();
      }
    };
  
    return (
      <div className="DragDrop border-dotted border-2 border-black p-10">
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          multiple={false}
          accept="image/*"
          onChange={handleFileChange}
        />
        <label
          className={isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
          htmlFor="fileUpload"
          ref={dragRef}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
  <div className="align-center items-center">
    {isDragging
      ? "여기다가 넣어주세요!" 
      : imageSrc 
        ? "" 
        : "드래그 하거나 파일을 선택하세요"}
  </div>
        </label>
        {imageSrc && (
          <div style={{ marginTop: "20px", textAlign: "center" }} className="p-20">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
              <div>
                <h4>Uploaded Image</h4>
                <Image src={imageSrc} alt="Uploaded" width={600} height={600} />
              </div>
              <div style={{ fontSize: "24px" }}>➡️</div>
              <div>
                <h4>Downloadable Image</h4>
                <Image src={imageSrc} alt="Downloadable" width={600} height={600} />
              </div>
            </div>
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
          </div>
        )}
      </div>
    );
  };
  
  export default DragDrop;