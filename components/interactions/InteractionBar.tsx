import { Article } from "@/types/article";
import LikeButton from "@/components/interactions/LikeButton";
import BookmarkButton from "@/components/interactions/BookmarkButton";
import FavoriteButton from "@/components/interactions/FavoriteButton";
import ShareMenu from "@/components/interactions/ShareMenu";

export default function InteractionBar({ article }: { article: Article }) {
  return (
    <div className="flex items-center gap-1">
      <LikeButton article={article} />
      <BookmarkButton article={article} />
      <FavoriteButton article={article} />
      <ShareMenu article={article} />
    </div>
  );
}
