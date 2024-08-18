import { useAuth, useAuthActions } from "@/context/AuthContext";
import { signout } from "@/redux/user/userAction";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  // const { user, loading } = useAuth();
  // const dispatch = useAuthActions();
  const { user, loading } = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  return (
    <header className={`bg-white shadow-md py-2 mb-8 sticky top-0 z-40`}>
      <div
        className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all${
          loading ? "opacity-0" : "opacity-100"
        } `}
      >
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link className="py-2 block" href="/">
                خانه
              </Link>
            </li>
            <li>
              <Link className="py-2 block" href="/blogs">
                بلاگ
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-x-5">
            {user ? (
              <>
                <button
                  className="bg-red-600 px-2 py-1 rounded text-red-100"
                  onClick={() => dispatch(signout())}
                >
                  خروج
                </button>
                <Link className="py-2 block" href="/profile">
                  پروفایل - <span className="text-sm">{user.name}</span>
                </Link>
              </>
            ) : (
              <>
                <Link className="block" href="/signup">
                  ثبت نام
                </Link>
                <Link className="block" href="/signin">
                  ورود
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
