export function Header() {
  return (
    <>
      <Logo />
      <User />
    </>
  );
}

function Logo() {
  return <img className="formatLogo"></img>;
}

const User = () => {
  return <p>User dummy vorübergehend</p>;
};
