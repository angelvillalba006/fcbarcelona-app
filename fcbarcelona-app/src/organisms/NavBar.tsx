import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome6";
import HomeRoute from "../pages/HomePage";
import NavigationContext from "../services/navigationService";

const NavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "house" },
  ]);

  // Define the renderScene function to map the routes to their respective components
  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
  });

  // Define the renderIcon function to render the icon for the Home route
  const renderIcon = ({ route, color }: { route: any; color: string }) => (
    <FontAwesome name={route.icon} size={24} color={color} />
  );

  return (
    <NavigationContext.Provider value={{ index, setIndex }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
        inactiveColor="#000"
        barStyle={{ backgroundColor: "#D9D9D9" }}
        theme={{ colors: { secondaryContainer: "#FFB35A" } }}
      />
    </NavigationContext.Provider>
  );
};

export default NavBar;
