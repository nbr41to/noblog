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

  // console.log(data);
  return (
    <StyledSleepScore className={className}>
      <h2>最近の睡眠履歴</h2>
      <div>
        <p>日時 スコア 実際の睡眠時間/ベットで横になっていた時間</p>
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
                <p>score:{activity.score_total}</p>
                <p>
                  {(activity.total / 60 / 60).toFixed(1)}h/
                  {(activity.duration / 60 / 60).toFixed(1)}h
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
    </StyledSleepScore>
  );
};

const StyledSleepScore = styled.div`
  ${({ theme }) => theme.box.inner};
  padding: 8px 16px;
  .active_list {
    display: flex;
    p {
      margin: 4px;
    }
  }
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
