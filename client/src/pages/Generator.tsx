import { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";
import { RectangleHorizontalIcon, RectangleVerticalIcon } from "lucide-react";

const Generator = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false); // typo fixed

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "product" | "model",
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "product") setProductImage(e.target.files[0]);
      else setModelImage(e.target.files[0]);
    }
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-40">
        <Title
          heading="Create In-Context Image"
          description="Upload your model and product images to generate 
          stunning UGC, short-form videos and social media posts"
        />

        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* left col */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone
              label="Product Image"
              file={productImage}
              onClear={() => setProductImage(null)}
              onChange={(e) => handleFileChange(e, "product")}
            />
            <UploadZone
              label="Model Image"
              file={modelImage}
              onClear={() => setModelImage(null)}
              onChange={(e) => handleFileChange(e, "model")}
            />
          </div>

          {/* right col */}
          <div className="w-full space-y-6">
            {/* Project Name */}
            <div>
              <label htmlFor="name" className="block text-sm mb-4">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name your project"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
                border-violet-200/10 focus:border-violet-500/50
                outline-none transition-all"
              />
            </div>

            {/* Product Name */}
            <div>
              <label htmlFor="productName" className="block text-sm mb-4">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter the name of the product"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
                border-violet-200/10 focus:border-violet-500/50
                outline-none transition-all"
              />
            </div>

            {/* Product Description */}
            <div>
              <label
                htmlFor="productDescription"
                className="block text-sm mb-4"
              >
                Product Description{" "}
                <span className="text-xs text-violet-400">(optional)</span>
              </label>
              <textarea
                id="productDescription"
                rows={4}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Enter the description of the product"
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
                border-violet-200/10 focus:border-violet-500/50
                outline-none resize-none transition-all"
              />
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="block text-sm mb-4">Aspect Ratio</label>
              <div className="flex gap-3">
                <RectangleVerticalIcon
                  onClick={() => setAspectRatio("9:16")}
                  className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent
                  cursor-pointer ${
                    aspectRatio === "9:16"
                      ? "ring-violet-500/50 bg-white/10"
                      : ""
                  }`}
                />
                <RectangleHorizontalIcon
                  onClick={() => setAspectRatio("16:9")}
                  className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent
                  cursor-pointer ${
                    aspectRatio === "16:9"
                      ? "ring-violet-500/50 bg-white/10"
                      : ""
                  }`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="userPrompt" className="block text-sm mb-4">
                User Prompt
                <span className="text-xs text-violet-400">(optional)</span>
              </label>
              <textarea
                id="userPrompt"
                rows={4}
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Describe how you want to narration to be."
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
                border-violet-200/10 focus:border-violet-500/50
                outline-none resize-none transition-all"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Generator;
