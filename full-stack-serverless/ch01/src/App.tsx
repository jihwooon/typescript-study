import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({ user, signOut }: WithAuthenticatorProps) {
  return (
    <div className="App">
      <h1>{user?.username}</h1>
      <button onClick={signOut}>로그아웃</button>
    </div>
  );
}

export default withAuthenticator(App);