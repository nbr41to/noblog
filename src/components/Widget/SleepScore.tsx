import { VFC, useEffect, useState } from 'react';
import { dateFormated } from 'src/utils/dateFormated';
import styled from 'styled-components';

type SleepScoreProps = {
  className?: string;
};

export const SleepScore: VFC<SleepScoreProps> = ({ className }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/get/sleeps')
      .then((res) => res.json())
      .then((json) => setData(json.sleep));
  }, []);

  console.log(data);
  return (
    <StyledSleepScore className={className}>
      <h2>最近の運動履歴</h2>
      {/* <div>
        {data ? (
          data
            .sort((a, b) => {
              if (a.summary_date < b.summary_date) return 1;
              if (a.summary_date > b.summary_date) return -1;
              return 0;
            })
            .map((activity: any, index: number) => (
              <div key={index} className="active_list">
                <p>
                  {dateFormated({
                    date: activity.summary_date,
                    format: 'YYYY/MM/DD',
                  })}
                </p>
                <p>score:{activity.score_training_volume}</p>
                <p>{activity.cal_total}Kcal</p>
              </div>
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
    </StyledSleepScore>
  );
};

const StyledSleepScore = styled.div`
  ${({ theme }) => theme.box.inner};
  padding: 8px;
  .active_list {
    display: flex;
    p {
      margin: 4px;
    }
  }
`;
