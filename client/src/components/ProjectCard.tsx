import { useNavigate } from "react-router-dom";
import type { Project } from "../types";
import {
  EllipsisIcon,
  Loader2Icon,
  PlaySquareIcon,
  Share2Icon,
  Trash2Icon,
} from "lucide-react";
import { useState } from "react";

const ProjectCard = ({
  gen,
  forCommunity = false,
}: {
  gen: Project;
  forCommunity?: boolean;
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDelete = async (id: string) => {
    const confirm = Window.confirm(
      "Are you sure, you want to delete this project?",
    );
    if (!confirm) return;
    console.log(id);
  };

  const togglePublish = async (projectId: string) => {
    console.log(projectId);
  };

  const handleShare = () => {
    if (!navigator.share) return;

    navigator.share({
      url: gen.generatedVideo || gen.generatedImage,
      title: gen.productName,
      text: gen.productDescription,
    });
  };

  return (
    <div className="mb-4 break-inside-avoid">
      <div
        className="bg-white/5 border border-white/10 rounded-xl
        overflow-hidden hover:border-white/20
        transition group cursor-pointer"
        onClick={() => !forCommunity && navigate(`/project/${gen.id}`)}
      >
        {/* Preview */}
        <div
          className={`${
            gen.aspectRatio === "9:16" ? "aspect-9/16" : "aspect-video"
          } relative overflow-hidden`}
        >
          {gen.generatedImage && (
            <img
              src={gen.generatedImage}
              alt={gen.productName}
              className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${
                gen.generatedVideo
                  ? "group-hover:opacity-0"
                  : "group-hover:scale-105"
              }`}
            />
          )}

          {gen.generatedVideo && (
            <video
              src={gen.generatedVideo}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-0 
              group-hover:opacity-100 transition duration-500"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          )}

          {!gen.generatedImage && !gen.generatedVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Loader2Icon className="size-7 animate-spin" />
            </div>
          )}

          {/* action menu */}
          {!forCommunity && (
            <div
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
              className="absolute right-3 top-3 sm:opacity-0 
              group-hover:opacity-100 transition"
            >
              <EllipsisIcon className="bg-black/10 rounded-full p-1 size-7" />

              <ul
                className={`absolute right-0 mt-2 w-40 text-xs
                ${menuOpen ? "block" : "hidden"}
                overflow-hidden bg-black/50 backdrop-blur
                border border-gray-500/50 rounded-lg shadow-md`}
              >
                {gen.generatedVideo && (
                  <li>
                    <a
                      href={gen.generatedVideo}
                      download
                      className="flex gap-2 items-center px-4 py-2 hover:bg-black/10"
                    >
                      <PlaySquareIcon size={14} />
                      Download Video
                    </a>
                  </li>
                )}

                {(gen.generatedVideo || gen.generatedImage) && (
                  <li>
                    <button
                      onClick={handleShare}
                      className="w-full flex gap-2 items-center px-4 py-2 hover:bg-black/10"
                    >
                      <Share2Icon size={14} /> Share
                    </button>
                  </li>
                )}

                <li>
                  <button
                    onClick={() => handleDelete(gen.id)}
                    className="w-full flex gap-2 items-center px-4 py-2 hover:bg-red-950/10"
                  >
                    <Trash2Icon size={14} /> Delete
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
