const BuildItem = (props) => {

  const { status, number, description, branch, hash, author, date, time } = props;

  const statusClass = `build-item status-${status}`;

  return (
    <div className={statusClass}>
      <div className="status-icon-container">
        <div className="status-icon"></div>
      </div>
      <div className="build-info-container">
        <div className="info">
          <div className="header">
            <div className="number">#{number}</div>
            <div className="description">{description}</div>
          </div>
          <div className="details">
            <div className="commit-info">
              <div className="branch">{branch}</div>
              <div className="hash">{hash}</div>
            </div>
            <div className="author">{author}</div>
          </div>
        </div>
        <div className="datetime">
          <div className="date">{date}</div>
          <div className="time">{time}</div>
        </div>
      </div>
    </div>
  );


}

export default BuildItem;