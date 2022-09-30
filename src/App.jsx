import { auth, databaseApp } from "./services/firebaseConfig";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./App.css";
import { signOut } from "firebase/auth";
import { orderBy } from "firebase/firestore";

export const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>ReactChat</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export const ChatRoom = () => {
  const messageRef = collection(databaseApp, "messages");
  const QueryMessages = query(messageRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(QueryMessages, { idField: "id" });
  return (
    <>
      <main>{messages && messages.map((msg, index) => {
        <ChatMessage key={index} message={msg} />
      })}</main>
    </>
  );
};

export const ChatMessage = (props) => {
  const { text, photoURL, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "send" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  );
};

export const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <button className="sign-in" onClick={() => signInWithGoogle()}>
      Logar com google
    </button>
  );
};

export const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sair
      </button>
    )
  );
};
