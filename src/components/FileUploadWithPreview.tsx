import { useState } from "react";

interface FileUploadWithPreviewProps {
  onFileChange: (file: File | null) => void;
}

const FileUploadWithPreview: React.FC<FileUploadWithPreviewProps> = ({
  onFileChange,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileChange(file);

      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(filePreviewUrl);
    } else {
      setPreviewUrl(null);
      setFileName("");
      onFileChange(null);
    }
  };

  const handleRemoveFile = () => {
    setPreviewUrl(null);
    setFileName("");
    onFileChange(null);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fileInput"
      >
        Cargar archivo
      </label>
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      <div className="flex items-center space-x-2">
        <label
          htmlFor="fileInput"
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Seleccionar archivo
        </label>
        {fileName && <span className="text-gray-600 text-sm">{fileName}</span>}
      </div>

      {previewUrl && (
        <div className="mt-4">
          <img
            src={previewUrl}
            alt="Vista previa"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <button
            onClick={handleRemoveFile}
            className="mt-2 text-red-500 hover:underline"
          >
            Eliminar archivo
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploadWithPreview;
