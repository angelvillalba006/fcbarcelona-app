import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome6";
import HomeRoute from "../pages/HomePage";
import ExampleRoute from "../pages/Example";
import NavigationContext from "../services/navigationService";

const NavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "example", icon: "example" },
    { key: "home", icon: "house" },
    { key: "example", icon: "example" },
  ]);

  // Define the renderScene function to map the routes to their respective components
  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    example: ExampleRoute,
  });

  // Define the renderIcon function to render the icon for the Home and Example routes
  const renderIcon = ({ route, color }: { route: any; color: string }) => (
    <FontAwesome name={route.icon} size={24} color={color} />
  );

  return (
    <NavigationContext.Provider value={{ index, setIndex }}>
      <BottomNavigation
        compact={true}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
        inactiveColor="#000"
        barStyle={{ backgroundColor: "#D9D9D9", height: 50 }} // Adjust the height to make it smaller
        theme={{ colors: { secondaryContainer: "#FFB35A" } }}
      />
    </NavigationContext.Provider>
  );
};

export default NavBar;
