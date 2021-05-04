import Image from "next/image";

const ProfileImage = () => (
  <>
    <Image
      src="/images/profile.png"
      height={150}
      width={150}
      alt="Gaël David"
    />
  </>
);

export default ProfileImage;
