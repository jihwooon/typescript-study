import Avatar from "./Avatar";

interface Props {
  image: string;
  name: string;
  role: string;
  isNew: boolean;
}

function Profile({ name, role, image, isNew }: Props) {
  return (
    <div className="profile">
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{role}</p>
    </div>
  )
}

export default Profile;
