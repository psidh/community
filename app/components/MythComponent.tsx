import Card from './MythCard';
import myths from '../lib/myths';

const MythCard = () => {
  return (
    <div>
      <Card mythcard={myths} />
    </div>
  );
};

export default MythCard;
