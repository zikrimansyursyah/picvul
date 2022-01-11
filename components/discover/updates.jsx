import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";
import UpdatesData from "../../db/updates.json";
import Link from "next/link";

export default function Updates() {
  const [HideUpdates, setHideUpdates] = useState(false);
  const displayCard = [
    "flex justify-center",
    "hidden lg:block",
    "hidden xl:block",
    "hidden 2xl:block",
    "hidden md:block",
  ];
  return (
    <>
      <button
        className={`mb-5 bg-blue-400 font-semibold text-white py-1 px-3 rounded-xl hover:bg-blue-500 hover:motion-safe:duration-500 hover:shadow-lg ${
          HideUpdates ? "block" : "hidden"
        }`}
        onClick={() => {
          setHideUpdates(false);
        }}
      >
        Show Updates
      </button>
      <div
        className={`font-semibold mb-10 ${HideUpdates ? "hidden" : "block"}`}
      >
        <div className="flex justify-between">
          <h1>People Updates</h1>
          <a
            className="font-normal cursor-pointer"
            onClick={() => {
              setHideUpdates(true);
            }}
          >
            Hide
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-3">
          {UpdatesData.data.map((e) => (
            <div key={e.index} className={`${displayCard[e.index]}`}>
              {e.index == 4 ? (
                <div className="absolute z-20 translate-x-20 h-32 w-52 flex justify-center items-center bg-gradient-to-r from-transparent to-white">
                  <a className="bg-white px-4 py-1 rounded-full text-gray-600 cursor-pointer">
                    see more
                  </a>
                </div>
              ) : (
                ""
              )}
              <UpdatesCard
                username={e.username}
                fullname={e.fullname}
                isFollowing={e.isFollowing}
                profile_img={e.profil_img}
                post1={e.post_img_1}
                post2={e.post_img_2}
                post3={e.post_img_3}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const UpdatesCard = ({
  username,
  fullname,
  isFollowing,
  profile_img,
  post1,
  post2,
  post3,
}) => {
  const [Following, setFollowing] = useState(false);
  const [Follow, setFollow] = useState(false);
  const [FollowState, setFollowState] = useState(isFollowing);

  return (
    <div className="content pt-2 max-w-max scale-up-hor-left">
      <div className="absolute translate-y-2 h-16 w-16 overflow-hidden border-2 border-white rounded-full z-10">
        <Link href={`/${username}`}>
          <a>
            <LazyLoadImage
              className="h-full w-full object-cover"
              src={profile_img}
              alt="profile"
              width="100%"
              height="100%"
              effect="blur"
            />
          </a>
        </Link>
      </div>
      <div className="flex gap-1 pl-8 mb-2">
        <div className="h-20 w-20 rounded-md overflow-hidden">
          <Link href={`/${username}/${Math.floor(Math.random() * 10000)}`}>
            <a>
              <LazyLoadImage
                className="h-full w-full object-cover"
                src={post1}
                alt="post1"
                width="100%"
                height="100%"
                effect="blur"
              />
            </a>
          </Link>
        </div>
        <div className="h-20 w-20 rounded-md overflow-hidden">
          <Link href={`/${username}/${Math.floor(Math.random() * 10000)}`}>
            <a>
              <LazyLoadImage
                className="h-full w-full object-cover"
                src={post2}
                alt="post2"
                width="100%"
                height="100%"
                effect="blur"
              />
            </a>
          </Link>
        </div>
        <div className="h-20 w-20 rounded-md overflow-hidden">
          <Link href={`/${username}/${Math.floor(Math.random() * 10000)}`}>
            <a>
              <LazyLoadImage
                className="h-full w-full object-cover"
                src={post3}
                alt="post3"
                width="100%"
                height="100%"
                effect="blur"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-between pl-8 text-sm">
        <Link href={`/${username}`}>
          <a>{fullname}</a>
        </Link>
        {FollowState ? (
          <div className="flex flex-col items-end">
            <a
              className="text-gray-400 cursor-pointer"
              onClick={() => {
                setFollowing(Following ? false : true);
              }}
            >
              Following
            </a>
            <div
              className={`${
                Following ? "flex" : "hidden"
              } absolute translate-y-6 rounded-lg border p-2 bg-white flex-col gap-1 items-center`}
            >
              <span>Unfollow ?</span>
              <div className="flex gap-2">
                <button
                  className="py-1 px-4 rounded-full bg-gray-200 font-semibold"
                  onClick={() => {
                    setFollowState(false);
                    setFollow(false);
                    setFollowing(false);
                  }}
                >
                  Yes
                </button>
                <button
                  className="py-1 px-4 rounded-full bg-red-200 font-semibold"
                  onClick={() => {
                    setFollowing(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-end">
            <a
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setFollow(Follow ? false : true);
              }}
            >
              Follow
            </a>
            <div
              className={`${
                Follow ? "flex" : "hidden"
              } absolute translate-y-6 rounded-lg border p-2 bg-white flex-col gap-1 items-center`}
            >
              <span>Follow ?</span>
              <div className="flex gap-2">
                <button
                  className="py-1 px-4 rounded-full bg-gray-200 font-semibold"
                  onClick={() => {
                    setFollowState(true);
                    setFollow(false);
                    setFollowing(false);
                  }}
                >
                  Yes
                </button>
                <button
                  className="py-1 px-4 rounded-full bg-red-200 font-semibold"
                  onClick={() => {
                    setFollow(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
