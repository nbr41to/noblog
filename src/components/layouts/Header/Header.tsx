import { NavMenu } from "../NavMenu";
import { SwitchTheme } from "../SwitchTheme";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 w-full  border-b bg-background py-2">
      <div className="relative mx-auto grid max-w-screen-xl place-items-center">
        <h1 className="text-center font-baloo text-3xl">noblog</h1>

        <div className="absolute right-4 flex gap-x-2">
          <NavMenu />
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
};
