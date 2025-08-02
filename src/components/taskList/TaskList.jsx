import { motion, AnimatePresence } from "framer-motion";

export const TaskList = ({ tasks, deleteTask, setSelectedTaskId }) => {
  return (
    <div>
      <ul className="space-y-6">
        <AnimatePresence>
          {tasks?.map((elem) => {
            return (
              <motion.li 
                key={elem.id} 
                className="mx-auto w-full max-w-140"
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex w-full items-center justify-between rounded-3xl border-3 border-indigo-900 bg-indigo-50 px-6 py-2.5">
                  <button 
                    className="text-[1.25rem] font-semibold"
                    onClick={() => setSelectedTaskId(elem.id)}
                  >{elem.title}</button>
                  <div className="flex justify-center gap-8">
                    {/* <p>0.5%</p> */}
                    <p className="font-semibold">{elem.subtasks?.length}</p>
                    <button onClick={() => deleteTask(elem.id)}>
                      <img src="/detele.svg" alt="delete" />
                    </button>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
};
