import Card from './EpicCard';
import myths from '../lib/epics';

const EpicCard = () => {
  return (
    <div>
      <Card epiccards={myths} />
    </div>
  );
};

export default EpicCard;
