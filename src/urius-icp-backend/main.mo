import Buffer "mo:base/Buffer";
import Text "mo:base/Text";

actor {
  type User = {
    id : Text;
    email : Text;
    username : Text;
    password : Text;
  };

  type UserProfile = {
    id : Text;
    email : Text;
    username : Text;
  };

  type UserProfileOrBool = {
    #userProfile : UserProfile;
    #boolean : Bool;
  };

  type Project = {
    id : Text;
    name : Text;
    creator : Text;
    lastModifier : Text;
  };
  // projectType : ProjectType;
  // createdAt : Text;
  // updatedAt : Text;

  type ProjectType = {
    #CodeEditor;
    #TextEditor;
    #Spreadsheet;
    #Whiteboard;
  };

  private var usersDB = Buffer.Buffer<User>(0);
  private var projectsDB = Buffer.Buffer<Project>(0);

  // User Functions
  private func addUser(user : User) : Bool {
    let _ = usersDB.add(user);
    return true;
  };

  private func _getUserById(userId : Text) : UserProfileOrBool {
    let usersSnapshot = Buffer.toArray(usersDB);

    for (user in usersSnapshot.vals()) {
      if (user.id == userId) {
        let existingUser = {
          id = user.id;
          email = user.email;
          username = user.username;
        };

        return #userProfile(existingUser);
      };
    };

    return #boolean(false);
  };

  // Authentication Functions
  public shared func signUp(email : Text, username : Text, password : Text) : async Bool {
    // check if user exists already
    let usersSnapshot = Buffer.toArray(usersDB);

    for (user in usersSnapshot.vals()) {
      if (user.email == email or user.username == username) return false;
    };

    // if code reaches here then user is unique
    let userId = "jrwjrg";
    let newUser : User = {
      id = userId;
      email = email;
      username = username;
      password = password;
    };
    let _ = addUser(newUser);
    return true;
  };

  public shared func signIn(email : Text, password : Text) : async UserProfileOrBool {
    let usersSnapshot = Buffer.toArray(usersDB);

    for (user in usersSnapshot.vals()) {
      if (user.email == email and user.password == password) {
        let existingUser = {
          id = user.id;
          email = user.email;
          username = user.username;
        };

        return #userProfile(existingUser);
      };
    };

    return #boolean(false);
  };

  // Project Functions
  public shared func createProject(projectId: Text, name : Text, username : Text) : async Text {
    let project = {
      id = projectId;
      name = name;
      creator = username;
      lastModifier = username;
    };

    let _ = projectsDB.add(project);
    return projectId;
  };

  // public shared func joinProject(projectId: Text): async Text {};
};
