import Link from "next/link";

export default function Connect() {
  return (
    <>
  <div className="plnt__connect" id="connect">
    <div className="plnt__connect-content">
      <p>Let&apos;s Connect</p>
      <h3>Want to collaborate on a project, or need assistance with my repositories? Please contact me!</h3>
    </div>
    <div className="plnt__connect-btn">
      <button type="button"><Link href="mailto:chase@utilibots.co.uk">Contact</Link></button>
    </div>
  </div>
    </>
  );
}
