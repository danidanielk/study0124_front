function Home() {
  return (
    <>
      <div className="max-w-2xl mx-auto ">
        <div className="px-3 py-2">
          <div className="flex flex-col gap-1 text-center">
            <button
              className="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg "
              href=""
              style={{
                backgroundImage:
                  "url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MjZfMjg1%2FMDAxNjUwOTQyNzU3OTQ3.c447-xnqf2fVH037MmlNbFDjzcw1bTGFYkT0YanJ-zwg.x1gKjDeRLSgakWYWw8QqhXfBNfE26W_x8RNtxOZBb8Eg.JPEG.soungmi9440%2F478f2ff9-4fcc-40f9-b3a4-475f299fec59.jpg&type=sc960_832')",
              }}
            ></button>
            <p className="font-serif font-semibold">Daniel Kim</p>
            <span className="text-sm text-gray-400">Photo</span>
            <span className="text-sm text-gray-400">
              hihihi hello hahaha
              {/* https://www.youtube.com/watch?v=dQw4w9WgXcQ */}
            </span>
          </div>

          <div className="flex justify-center items-center gap-2 my-3">
            <div className="font-semibold text-center mx-4">
              <p className="text-black">102</p>
              <span className="text-gray-400">Posts</span>
            </div>
            <div className="font-semibold text-center mx-4">
              <p className="text-black">102</p>
              <span className="text-gray-400">Followers</span>
            </div>
            <div className="font-semibold text-center mx-4">
              <p className="text-black">102</p>
              <span className="text-gray-400">Folowing</span>
            </div>
          </div>

          <div className="flex justify-center gap-2 my-5">
            <button className="bg-[#FF6A3D] px-10 py-2 rounded-full text-white shadow-lg">
              Follow
            </button>
            <button className="bg-white border border-gray-500 px-10 py-2 rounded-full shadow-lg">
              Message
            </button>
          </div>

          <div className="flex justify-between items-center">
            <button className="w-full py-2 border-b-2 border-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button className="w-full py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 my-3 border-2">
            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  "url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDNfMjk4%2FMDAxNjU0MjQ3MDAzNzQ1.vCVJIVyu7Lbo7HuYsWykLA7hPT0UWPLEf-kKp482Bjsg.7iaBOlRGqUTIC2GwKsPTT9S3Lm-MYC1jIp8wGCLaF1Mg.JPEG.niceguy00%2FSeul_%25BD%25BA%25C5%25B2%25C0%25AF_%25BD%25C5%25BC%25BC%25B0%25E605.jpg&type=sc960_832')",
              }}
            ></button>
            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  'url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjhfMjQ2%2FMDAxNjY0MzcyNTg2OTM5.g2_QV2caG48C75ODU36ZBYemm8fA6f6x7KdE5qBLS7Eg.j7kP09HicTAkSqz75Ipm1bGwkyWGfLzxDYdQbWsHOWkg.JPEG.niceguy00%2FSeul_%25BD%25C5%25BC%25BC%25B0%25E6_%25B9%25D9%25B4%25D2%25B6%25F3%25C4%25DA12.jpg&type=sc960_832")',
              }}
            ></button>
            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  "url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MTVfMjc5%2FMDAxNjYzMjI4NTkzMDM4.f0JZ3kSncOZUecrbGdhKq1HYEBrs1cRJfvWHTlD4mgMg.PVBKAP3xeFF3gFTJZu05RNNGZpwvLKhUhSGHzKpXMwQg.JPEG.chahong1%2FKakaoTalk_20220915_114942307_02.jpg&type=a340')",
              }}
            ></button>

            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  "url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MzBfMjU3%2FMDAxNjU5MTU2NDM5NDQ0.3CjyALkfa4LPoFHHozsUnCVb-qbr3Snd-0PsGgtWLBIg.XYd2ZBEm3mto1zz0LZkN8FkPXry92OdMQ-HgkWRj-HAg.JPEG.kkanri93%2Fsearch.pstatic.jpg&type=sc960_832')",
              }}
            ></button>
            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  "url('https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffb%2Fd8%2Ff4%2Ffbd8f450f2bb84bf981fcafdb28356d7.jpg&type=sc960_832')",
              }}
            ></button>
            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  "url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MjBfODQg%2FMDAxNjU4MzA2MTQzOTE0.NtroxsaHLg3BiexqNAFZHgeoT9dV67ue1_iyl0lpZ-Mg.gD3VgB1d-h0RhQDay12NIJWYzPDeFP7-JzUJrPQ1tC8g.JPEG.rattou_8%2F%25B0%25A1%25C0%25BB%25BF%25FA16.jpg&type=sc960_832')",
              }}
            ></button>

            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  "url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTJfMTM4%2FMDAxNjQ3MDkwODk2NjA2.0XxpYoGXoGMDe23oQZaEMKWCnCAjqvcA5yNZ5Gv7lOsg.mismixcGXjJ0DGQV5R6PtjA9Zq8ty0_3SQ1xdUddMIYg.JPEG.niceguy00%2FSeul_%25B9%25D9%25B4%25D2%25B6%25F3%25C4%25DA_%25BC%25BC%25B0%25E6%25BE%25BE17.jpg&type=sc960_832')",
              }}
            ></button>
            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  " url('https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDNfMTk1%2FMDAxNjU0MjQ3NDgzODY0.GBaN0ZKRL1crvFauL7SIVSYM_7sCaV9OjmwEbVojYKgg.IbZL7iaqr6mUACNdwBtOD99gK3W1SPICElIBbXXUWn8g.JPEG.niceguy00%2FSeul%25C4%25C4_%25BD%25BA%25C5%25B2%25C0%25AF_%25BD%25C5%25BC%25BC%25B0%25E622.jpg&type=sc960_832')",
              }}
            ></button>
            <button
              className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg"
              href=""
              style={{
                backgroundImage:
                  " url('https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F17%2F53%2F19%2F175319abd485c566aea645130cad3109.jpg&type=sc960_832')",
              }}
            ></button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 bg-gray-900  px-10 py-5 rounded-full text-gray-500">
          <button className="p-2 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#FF6A3D]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-[#FF6A3D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
