import { VFC, useEffect, useState } from 'react';
import { dateFormated } from 'src/utils/dateFormated';
import styled from 'styled-components';

type ActivityScoreProps = {
  className?: string;
};

export const ActivityScore: VFC<ActivityScoreProps> = ({ className }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/get/activities')
      .then((res) => res.json())
      .then((json) => setData(json.activity));
  }, []);

  // console.log(data);
  return (
    <StyledActivityScore className={className}>
      <h2>最近の運動履歴</h2>
      <p>日時 スコア 運動による消費カロリー/総消費カロリー</p>
      <div>
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
                <p>
                  {activity.cal_active}cal/{activity.cal_total}cal(
                  {((activity.cal_active / activity.cal_total) * 100).toFixed(
                    1,
                  )}
                  %)
                </p>
              </div>
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <a
        href="https://cloud.ouraring.com/docs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        by oura ring api
      </a>
    </StyledActivityScore>
  );
};

const StyledActivityScore = styled.div`
  ${({ theme }) => theme.box.inner};
  padding: 8px 16px;
  position: relative;
  .active_list {
    display: flex;
    p {
      margin: 4px;
    }
  }
  a {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pink};
    position: absolute;
    bottom: 12px;
    right: 20px;
  }
`;
