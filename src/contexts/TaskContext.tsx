import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
  name: string;
  status: string;
  date: string;
  time: string;
  place: string;
  number_file: number;
}

interface TaskContextProps {
  allTask: Task[];
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [allTask, setAllTask] = useState<Task[]>([
    {
      name: 'Walk the dog',
      status: 'completed',
      date: '2024-05-01',
      time: '07:30 AM',
      place: 'Central Park',
      number_file: 3,
    },
    {
      name: 'Vet appointment',
      status: 'pending',
      date: '2024-05-02',
      time: '10:00 AM',
      place: 'Pet Clinic',
      number_file: 1,
    },
    {
      name: 'Buy pet food',
      status: 'in progress',
      date: '2024-05-03',
      time: '02:00 PM',
      place: 'Pet Store',
      number_file: 5,
    },
    {
      name: 'Grooming session',
      status: 'completed',
      date: '2024-05-04',
      time: '11:00 AM',
      place: 'Groomer\'s Place',
      number_file: 2,
    },
    {
      name: 'Dog training class',
      status: 'pending',
      date: '2024-05-05',
      time: '04:00 PM',
      place: 'Training Center',
      number_file: 4,
    },
    {
      name: 'Flea treatment',
      status: 'completed',
      date: '2024-05-06',
      time: '09:00 AM',
      place: 'Home',
      number_file: 1,
    },
    {
      name: 'Check-up',
      status: 'in progress',
      date: '2024-05-07',
      time: '03:00 PM',
      place: 'Vet Clinic',
      number_file: 2,
    },
    {
      name: 'Buy new toys',
      status: 'completed',
      date: '2024-05-08',
      time: '12:00 PM',
      place: 'Toy Store',
      number_file: 6,
    },

  ]);

  return (
    <TaskContext.Provider value={{ allTask, setAllTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export default TaskContext;
