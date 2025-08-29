import FontAwesome from "@expo/vector-icons/FontAwesome";

export const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  focused: boolean;
}) => {
  return <FontAwesome size={24} {...props} />;
};
