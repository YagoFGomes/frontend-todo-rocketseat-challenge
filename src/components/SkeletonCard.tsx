import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <>
      <div className="bg-gray-700 p-4 rounded mb-4 relative">
        <Skeleton
          baseColor="#6b21a8"
          highlightColor="#f0abfc"
          borderRadius={5}
          enableAnimation
          count={1}
          height={12}
        />
        <Skeleton
          baseColor="#6b21a8"
          highlightColor="#f0abfc"
          enableAnimation
          borderRadius={5}
          count={2}
          height={10}
        />
      </div>
    </>
  );
}

export default SkeletonCard;
