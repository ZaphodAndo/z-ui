import colour from "tinycolor2";

type ProfileImageProps = {
  value: string;
};

/**
 * Component for showing a generative profile image.
 * @param {string} value The string value for generating image
 */
function ProfileImage({ value }: ProfileImageProps) {
  // Generate 32 bit hash, src: https://github.com/darkskyapp/string-hash
  let hash = 5381;
  let i = value.length;

  while (i) {
    hash = (hash * 33) ^ value.charCodeAt(--i);
  }

  let result = hash >>> 0;

  const c = new colour({ h: result % 360, s: 0.95, l: 0.5 });
  const c1 = c.toHexString();
  const c2 = c.triad()[1].toHexString();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={80} height={80} fill="none">
      <circle cx="40" cy="40" r="40" fill="url(#a)"></circle>
      <defs>
        <linearGradient
          id="a"
          x1="8.8"
          x2="66.4"
          y1="14.8"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={c1}></stop>
          <stop offset="1" stopColor={c2}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ProfileImage;
