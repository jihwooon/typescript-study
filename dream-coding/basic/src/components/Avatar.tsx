interface AvatarProps {
  image: string;
  isNew: boolean;
}

export default function Avatar({ image, isNew }: AvatarProps) {
  return (
    <div className="avatar">
      <img
        className="photo"
        src={image}
        alt='avatar'
      />
      {isNew && <span className="new">New</span>}
    </div>
  );
}
