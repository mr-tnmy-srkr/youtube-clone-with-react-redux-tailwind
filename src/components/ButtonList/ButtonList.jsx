const buttonList = [
  "All",
  "Javascript",
  "Java",
  "Live",
  "Music",
  "Songs",
  "Vlogs",
  "Trending",
  "Programming",
  "News",
  "Technology",
  "Cricket",
  "Comedy",
  "Thriller",
  "New to you",
  "Computer Programming",
  "Netlify",
  "Coding",
];

const ButtonList = () => {
  return (
    <div className="flex w-full overflow-x-scroll  my-1">
      {buttonList.map((buttonName, index) => {
        return (
          <div key={index}>
            <button className="bg-gray-200 w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg mb-4">
              <span className="whitespace-nowrap">{buttonName}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
