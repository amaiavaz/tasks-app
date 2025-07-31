

export const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul className="space-y-6">
        {tasks?.map((elem, i) => {
          return(
          <li key={i} className="mx-auto w-full max-w-140">
            <div className="flex w-full items-center justify-between rounded-3xl border-3 border-indigo-900 bg-indigo-100 px-6 py-2.5">
              <button className="text-[1.25rem] font-semibold">
                {elem}
              </button>
              <div className="flex justify-center gap-8">
                <p>0.5%</p>
                <p className="font-semibold">1</p>
                <button>
                  <img src="/detele.svg" alt="delete" />
                </button>
              </div>
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  );
};
