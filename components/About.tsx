"use client";

export default function About() {
  return (
    <section className="flex space-x-1 items-center text-xs text-gray-400">
      <span>Made with</span>
      <svg
        className="fill-red-600 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        clip-rule="evenodd"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="nonzero"
          d="M7.234 3.004C4.582 3.004 2 4.833 2 8.181c0 3.725 4.345 7.727 9.303 12.54a.996.996 0 0 0 1.394 0C17.674 15.89 22 11.907 22 8.181c0-3.353-2.58-5.168-5.229-5.168A5.692 5.692 0 0 0 12 5.567a5.686 5.686 0 0 0-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7a.752.752 0 0 0 1.223.003c.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z"
        />
      </svg>
      <span>by</span>
      <a
        className="hover:underline decoration-blue-600 hover:text-yellow-50"
        href="https://github.com/ImMyst"
        target={"_blank"}
        rel="noreferrer"
      >
        ImMyst
      </a>
    </section>
  );
}
