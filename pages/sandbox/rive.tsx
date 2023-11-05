// @refresh reset https://github.com/rive-app/rive-react/issues/141

import type { NextPage } from 'next';

import { CodeHighlight } from '@mantine/code-highlight';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import Head from 'next/head';

import { PageTitle } from '~/commons/PageTitle';

const Rive: NextPage = () => {
  /* Masao */
  const { rive, RiveComponent } = useRive({
    src: '/lesson-masao.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
    animations: ['stay'],
  });
  const onClickInputMasaoPressed = useStateMachineInput(
    rive,
    'State Machine 1',
    'Pressed',
  );
  const onPressed = () => onClickInputMasaoPressed?.fire();

  /* Slime */
  const { rive: slimeRive, RiveComponent: SlimeRiveComponent } = useRive({
    src: '/slime.riv',
    stateMachines: 'State Machine',
    autoplay: true,
    animations: ['stay'],
  });
  const onClickInput = useStateMachineInput(
    slimeRive,
    'State Machine',
    'Shivering',
  );
  const onToggle = () => {
    if (!onClickInput) return;
    onClickInput.value = !onClickInput?.value;
  };

  return (
    <div className="w-main mx-auto">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="Rive animations" />
      <p>RiveでSVGをアニメーション化した</p>
      <CodeHighlight
        code={`import Rive from '@rive-app/react-canvas';

export const Simple = () => (
  <Rive src="https://cdn.rive.app/animations/vehicles.riv" />
);`}
      />

      <div className="h-60 w-60 drop-shadow-[2px_2px_3px_#0006] hover:cursor-pointer">
        <RiveComponent onClick={onPressed} />
      </div>
      <div>Click me!!</div>

      <div className="h-60 w-60 drop-shadow-[8px_8px_2px_#000a] hover:cursor-pointer">
        <SlimeRiveComponent onClick={onToggle} />
      </div>
      <div>Click me!!</div>
      <div>drop-shadowが効く</div>
    </div>
  );
};

export default Rive;
