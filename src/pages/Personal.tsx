import PersonalBanner from "../components/PersonalBanner";
import PersonalInfo from "../components/PersonalInfo";

const Personal = () => {
  return (
    <div className="w-full min-h-screen flex flex-row">
      <PersonalBanner />
      <PersonalInfo />
    </div>
  );
};

export default Personal;
