import About from "./components/About";
import Faqs from "./components/Faqs";

function App() {
  // const [data, setData] = useState([]);
  const url = "https://bespoke-diet-generator.p.rapidapi.com/user";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "01fa9544c8msh08b8a0d883a4ebdp1ff8a8jsne3e68d563a72",
      "X-RapidAPI-Host": "bespoke-diet-generator.p.rapidapi.com",
    },
    body: JSON.stringify({
      height: 184,
      weight: 87,
      dateOfBirth: "1991-03-03",
      sex: "MALE",
      activityLevel: "VERY_ACTIVE",
    }),
  };
  const fetchUserData = useCallback(async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("error!");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return <main className="App"></main>;
}

export default App;
