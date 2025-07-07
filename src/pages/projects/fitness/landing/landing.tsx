import { useNavigate } from "react-router-dom";

import firebase from "./tracker/firebase.png";
import google from "./tracker/google.png";
import iphone from "./tracker/iphone.png";
import phone from "./tracker/phone.png";
import trophy from "./tracker/trophy.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("jack-pearson.com/landing");
  };

  return (
    <main style={{ fontFamily: "sans-serif" }}>
      {/* Header */}
      <section
        style={{
          padding: "4rem 1rem",
          textAlign: "center",
          color: "black",
        }}
      >
        <h1
          style={{
            fontSize: "2.75rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Track your workouts for free
        </h1>
        <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
          No download required. Just sign in and get started.
        </p>
        <button onClick={handleLoginRedirect} style={styles.primaryButton}>
          Go to Workout Tracker
        </button>
      </section>

      {/* Promo */}
      <section
        style={{
          padding: "4rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div style={styles.promoGrid}>
          <div style={styles.promoHalf}>
            <img
              src={phone}
              alt="App Mockup"
              style={{
                width: "100%",
                maxWidth: "320px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
          <div style={styles.promoHalf}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              Your workouts, always with you
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#4b5563",
                maxWidth: "500px",
                lineHeight: 1.6,
              }}
            >
              Our app works directly in your browser — no installation needed.
              Track your lifts and runs from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "#ffffff" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
          className="feature-grid"
        >
          <FeatureCard
            title="Login with Google"
            description="Secure, one-click login using your Google account."
            icon={<img src={google} alt="Google" width={32} />}
          />
          <FeatureCard
            title="Auto-Save Workouts"
            description="All your sets and runs are saved instantly in the cloud."
            icon={<img src={firebase} alt="Firebase" width={32} />}
          />
          <FeatureCard
            title="Mobile-First Design"
            description="Optimized for phones, so you can track workouts at the gym."
            icon={<img src={iphone} alt="iPhone" width={32} />}
          />
          <FeatureCard
            title="Personal Bests"
            description="Track your PRs for each exercise and watch your progress."
            icon={<img src={trophy} alt="Trophy" width={32} />}
          />
        </div>
      </section>
    </main>
  );
};

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div
    style={{
      backgroundColor: "#f9fafb",
      borderRadius: "1rem",
      padding: "2rem",
      textAlign: "center",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "250px",
      boxSizing: "border-box",
      width: "100%", // Already inside a grid cell
      maxWidth: "100%",
    }}
  >
    <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
    <h3
      style={{
        fontSize: "1.25rem",
        fontWeight: "600",
        marginBottom: "0.5rem",
      }}
    >
      {title}
    </h3>
    <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>{description}</p>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  primaryButton: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#22c55e",
    color: "#fff",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
  },
  promoGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    width: "100%",
    maxWidth: "1000px",
  },
  promoHalf: {
    flex: "1 1 300px",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

export default LandingPage;
