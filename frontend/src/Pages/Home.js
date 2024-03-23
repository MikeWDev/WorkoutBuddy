import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// componets
import WorkoutDetails from "../componets/WorkoutDetails";
import WorkoutForm from "../componets/WorkoutForm";
import Loading from "../componets/Loading";
const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchWorkouts = async () => {
      setIsLoading(true);
      const serverUrl = process.env.REACT_APP_SERVER_URL;
      const response = await fetch(`${serverUrl}/api/workouts`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    if (user) {
      fetchWorkouts();
      setIsLoading(false);
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workouts._id} workout={workout} />
            ))}
        </div>
      )}

      <WorkoutForm />
    </div>
  );
};

export default Home;
