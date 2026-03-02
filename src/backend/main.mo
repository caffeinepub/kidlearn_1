import Map "mo:core/Map";
import Set "mo:core/Set";
import Blob "mo:core/Blob";
import Int "mo:core/Int";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import MixinStorage "blob-storage/Mixin";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  public type Subject = {
    id : Nat;
    subjectId : Nat;
    classId : ?Nat;
    name : ?Text;
    iconEmoji : ?Text;
    order : ?Nat;
    createdAt : NationTime;
    updatedAt : NationTime;
    status : ResourceStatus;
  };

  public type Chapter = {
    id : Nat;
    classId : ?Nat;
    subjectId : Nat;
    title : Text;
    icon : ?Text;
    order : ?Nat;
    createdAt : NationTime;
    updatedAt : NationTime;
    status : ResourceStatus;
  };

  public type Topic = {
    id : Nat;
    chapterId : Nat;
    classId : ?Nat;
    subjectId : Nat;
    title : Text;
    description : ?Text;
    videoUrl : ?Text;
    pdfUrl : ?Text;
    textContent : ?Text;
    questions : [Question];
    difficulty : ?DifficultyLevel;
    durationMinutes : ?Nat;
    order : ?Nat;
    createdAt : NationTime;
    updatedAt : NationTime;
    status : ResourceStatus;
  };

  public type Question = {
    questionId : Nat;
    questionType : QuestionType;
    topic : Nat;
    text : Text;
    options : [Text];
    correctAnswer : Nat;
    explanation : ?Text;
    marks : ?Nat;
    difficulty : ?DifficultyLevel;
    status : ResourceStatus;
    createdAt : NationTime;
    updatedAt : NationTime;
  };

  public type QuestionType = {
    #multipleChoice;
    #trueFalse;
    #shortAnswer;
    #fillInTheBlanks;
  };

  public type DifficultyLevel = {
    #easy;
    #medium;
    #hard;
  };

  public type AnsweredQuestion = {
    id : Nat;
    questionId : Nat;
    topicId : Nat;
    selectedOption : Nat;
    isCorrect : Bool;
    attemptNumber : Nat;
    timeTakenSeconds : Nat;
    status : AnswerStatus;
    createdAt : NationTime;
    updatedAt : NationTime;
  };

  public type TopicProgressEntry = {
    id : Nat;
    studentId : Nat;
    topicId : Nat;
    completionStatus : CompletionStatus;
    attempts : Nat;
    correctAnswers : Nat;
    score : Nat;
    timeSpentSeconds : Nat;
    createdAt : NationTime;
    updatedAt : NationTime;
  };

  public type NationTime = {
    createdAt : Int;
    updatedAt : Int;
  };

  public type ResourceStatus = {
    #active;
    #inactive;
    #archived;
    #deleted;
  };

  public type AnswerStatus = {
    #attempted;
    #finalized;
    #archived;
  };

  public type CompletionStatus = {
    #notStarted;
    #inProgress;
    #completed;
  };

  public type TopicsProgressResponse = {
    topics : [Topic];
    progress : [TopicProgressEntry];
    progressMap : [(Nat, TopicProgressEntry)];
  };

  public type TestTypeStatistics = {
    #multipleChoice : TestStatisticsRecord;
    #trueFalse : TestStatisticsRecord;
    #shortAnswer : TestStatisticsRecord;
    #fillInTheBlanks : TestStatisticsRecord;
  };

  public type QuestionTypeStatistics = {
    #multipleChoice : QuestionStatisticsRecord;
    #trueFalse : QuestionStatisticsRecord;
    #shortAnswer : QuestionStatisticsRecord;
    #fillInTheBlanks : QuestionStatisticsRecord;
  };

  public type TestStatisticsRecord = {
    attempts : Nat;
    correct : Nat;
    incorrect : Nat;
    highScore : Nat;
    averageScore : Nat;
    totalTimeSpent : Nat;
  };

  public type QuestionStatisticsRecord = {
    attempts : Nat;
    correct : Nat;
    incorrect : Nat;
    averageTime : Nat;
    averageScore : Nat;
  };

  public type StudentProfile = {
    id : Nat;
    userId : Principal;
    displayName : Text;
    classId : Nat;
    medium : Text;
    languagePref : Text;
    profileType : ProfileType;
    joinedAt : Int;
    updatedAt : Int;
    deletedAt : Int;
    grades : Text;
    timezone : Text;
    photoURL : Text;
    subjects : [Text];
    country : Text;
    state : Text;
    city : Text;
    birthdate : Text;
    gender : Text;
    profileID : Text;
    phone : Text;
    email : Text;
    parentID : Text;
    entrySource : Text;
  };

  public type TeacherProfile = {
    id : Nat;
    userId : Principal;
    displayName : Text;
    classes : [Text];
    subjects : [Text];
    profileType : Text;
    joinedAt : Int;
    updatedAt : Int;
    deletedAt : Int;
    photoURL : Text;
    gender : Text;
    address : Text;
    birthdate : Text;
    profileID : Text;
    phone : Text;
    email : Text;
    entrySource : Text;
    isActive : Bool;
  };

  public type ParentProfile = {
    id : Nat;
    userId : Principal;
    displayName : Text;
    profiles : [Profile];
    profileType : Text;
    joinedAt : Int;
    updatedAt : Int;
    deletedAt : Int;
    photoURL : Text;
    gender : Text;
    address : Text;
    birthdate : Text;
    profileID : Text;
    phone : Text;
    email : Text;
    entrySource : Text;
    isActive : Bool;
  };

  public type Profile = {
    id : Nat;
    displayName : Text;
    userType : Text;
  };

  public type UserProfile = {
    displayName : Text;
    classId : Text;
    medium : Text;
    languagePref : Text;
  };

  public type AdminStats = {
    totalStudents : Nat;
    activeToday : Nat;
    topicsCompletedTotal : Nat;
  };

  public type ProfileType = {
    #student;
    #parent;
    #teacher;
  };

  public type ContentInput = {
    classId : Nat;
    subjects : Nat;
    title : Text;
    description : Text;
    videoUrl : ?Text;
    pdfUrl : ?Text;
    textContent : ?Text;
    questions : [Question];
    difficulty : DifficultyLevel;
    durationMinutes : Nat;
    order : Nat;
  };

  public type ContentUpdate = {
    content : ContentInput;
    topicId : Nat;
  };

  public type TopicsProgressInput = {
    topicIds : [Nat];
  };

  public type MultiTopicProgressEntry = {
    topicId : Nat;
    topic : Topic;
    progress : TopicProgressEntry;
  };

  public type MultiTopicProgressResponse = {
    status : Text;
    data : [MultiTopicProgressEntry];
    totalTimeSpent : Nat;
    completionStats : MultiTopicCompletionStats;
  };

  public type MultiTopicCompletionStats = {
    totalTopics : Nat;
    completedTopics : Nat;
    inProgressTopics : Nat;
    notStartedTopics : Nat;
    completionPercentage : Float;
    topicWeights : [MultiTopicWeight];
  };

  public type MultiTopicWeight = {
    topicId : Nat;
    weight : Float;
    status : Text;
    completedQuestionsScore : Float;
  };

  public type MultiTopicProgressInput = {
    topicIds : [Nat];
    topics : [Nat];
  };

  // Internal state
  let subjects = Map.empty<Nat, Subject>();
  let chapters = Map.empty<Nat, Chapter>();
  let topics = Map.empty<Nat, Topic>();
  let studentProfiles = Map.empty<Principal, StudentProfile>();
  let teacherProfiles = Map.empty<Principal, TeacherProfile>();
  let parentProfiles = Map.empty<Principal, ParentProfile>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let topicProgress = Map.empty<Nat, TopicProgressEntry>();
  let answeredQuestions = Map.empty<Nat, AnsweredQuestion>();

  var nextTopicId = 1;
  var nextChapterId = 1;
  var nextStudentId = 1;
  var nextTeacherId = 1;
  var nextParentId = 1;
  var nextProgressId = 1;

  let classIds = Set.fromArray(["lkg", "ukg", "class_1", "class_2", "class_3", "class_4", "class_5", "class_6"]);

  // Required user profile functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Student profile management
  public shared ({ caller }) func createStudentProfile(displayName : Text, classId : Nat, medium : Text, languagePref : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create student profiles");
    };

    let studentId = nextStudentId;
    nextStudentId += 1;

    let profile : StudentProfile = {
      id = studentId;
      userId = caller;
      displayName;
      classId;
      medium;
      languagePref;
      profileType = #student;
      joinedAt = Time.now();
      updatedAt = Time.now();
      deletedAt = 0;
      grades = "";
      timezone = "";
      photoURL = "";
      subjects = [];
      country = "";
      state = "";
      city = "";
      birthdate = "";
      gender = "";
      profileID = "";
      phone = "";
      email = "";
      parentID = "";
      entrySource = "";
    };

    studentProfiles.add(caller, profile);

    let userProfile : UserProfile = {
      displayName;
      classId = classId.toText();
      medium;
      languagePref;
    };
    userProfiles.add(caller, userProfile);

    studentId;
  };

  public shared ({ caller }) func updateStudentProfile(displayName : Text, classId : Nat, medium : Text, languagePref : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update their profile");
    };

    switch (studentProfiles.get(caller)) {
      case (null) { Runtime.trap("Student profile not found") };
      case (?existingProfile) {
        let updatedProfile : StudentProfile = {
          id = existingProfile.id;
          userId = caller;
          displayName;
          classId;
          medium;
          languagePref;
          profileType = #student;
          joinedAt = existingProfile.joinedAt;
          updatedAt = Time.now();
          deletedAt = 0;
          grades = "";
          timezone = "";
          photoURL = "";
          subjects = [];
          country = "";
          state = "";
          city = "";
          birthdate = "";
          gender = "";
          profileID = "";
          phone = "";
          email = "";
          parentID = "";
          entrySource = "";
        };
        studentProfiles.add(caller, updatedProfile);

        let userProfile : UserProfile = {
          displayName;
          classId = classId.toText();
          medium;
          languagePref;
        };
        userProfiles.add(caller, userProfile);
      };
    };
  };

  public query ({ caller }) func getMyStudentProfile() : async ?StudentProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their profile");
    };
    studentProfiles.get(caller);
  };

  // admin only: Get any student profile
  public query ({ caller }) func getStudentProfile(studentPrincipal : Principal) : async ?StudentProfile {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view other student profiles");
    };
    studentProfiles.get(studentPrincipal);
  };

  // admin only: List all students
  public query ({ caller }) func listAllStudents() : async [StudentProfile] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can list all students");
    };
    studentProfiles.values().toArray();
  };

  // Content Management - admin only
  public shared ({ caller }) func createChapter(classId : Nat, subjectId : Nat, title : Text, icon : ?Text, order : ?Nat) : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can create chapters");
    };

    let chapterId = nextChapterId;
    nextChapterId += 1;

    let chapter : Chapter = {
      id = chapterId;
      classId = ?classId;
      subjectId;
      title;
      icon;
      order;
      createdAt = {
        createdAt = Time.now();
        updatedAt = Time.now();
      };
      updatedAt = {
        createdAt = Time.now();
        updatedAt = Time.now();
      };
      status = #active;
    };
    chapters.add(chapterId, chapter);
    chapterId;
  };

  public shared ({ caller }) func updateChapter(chapterId : Nat, classId : Nat, subjectId : Nat, title : Text, icon : ?Text, order : ?Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update chapters");
    };

    if (not chapters.containsKey(chapterId)) {
      Runtime.trap("Chapter not found");
    };

    let chapter : Chapter = {
      id = chapterId;
      classId = ?classId;
      subjectId;
      title;
      icon;
      order;
      createdAt = {
        createdAt = Time.now();
        updatedAt = Time.now();
      };
      updatedAt = {
        createdAt = Time.now();
        updatedAt = Time.now();
      };
      status = #active;
    };
    chapters.add(chapterId, chapter);
  };

  public shared ({ caller }) func deleteChapter(id : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete chapters");
    };
    chapters.remove(id);
  };

  public shared ({ caller }) func createTopic(content : ContentInput) : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can create topics");
    };

    let topicId = nextTopicId;
    nextTopicId += 1;

    let topic : Topic = {
      id = topicId;
      chapterId = content.subjects;
      classId = ?content.classId;
      subjectId = content.subjects;
      title = content.title;
      description = ?content.description;
      videoUrl = content.videoUrl;
      pdfUrl = content.pdfUrl;
      textContent = content.textContent;
      questions = content.questions;
      difficulty = ?content.difficulty;
      durationMinutes = ?content.durationMinutes;
      order = ?content.order;
      createdAt = {
        createdAt = Time.now();
        updatedAt = Time.now();
      };
      updatedAt = {
        createdAt = Time.now();
        updatedAt = Time.now();
      };
      status = #active;
    };
    topics.add(topicId, topic);
    topicId;
  };

  public shared ({ caller }) func updateTopic(topicId : Nat, content : ContentInput) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update topics");
    };

    if (not topics.containsKey(topicId)) {
      Runtime.trap("Topic not found");
    };

    let topic : Topic = {
      id = topicId;
      chapterId = content.subjects;
      classId = ?content.classId;
      subjectId = content.subjects;
      title = content.title;
      description = ?content.description;
      videoUrl = content.videoUrl;
      pdfUrl = content.pdfUrl;
      textContent = content.textContent;
      questions = content.questions;
      difficulty = ?content.difficulty;
      durationMinutes = ?content.durationMinutes;
      order = ?content.order;
      createdAt = {
        createdAt = Time.now();
        updatedAt = Time.now();
      };
      updatedAt = {
        createdAt = Time.now();
        updatedAt = Time.now();
      };
      status = #active;
    };
    topics.add(topicId, topic);
  };

  public shared ({ caller }) func deleteTopic(topicId : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete topics");
    };
    topics.remove(topicId);
  };

  // Student content browsing - requires user role
  public query ({ caller }) func getChaptersForSubject(subjectId : Nat, classId : Nat) : async [Chapter] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can browse chapters");
    };

    chapters.values().toArray().filter(
      func(chapter) { chapter.subjectId == subjectId and chapter.classId == ?classId }
    );
  };

  public query ({ caller }) func getTopicsForChapter(chapterId : Nat, subjectId : Nat, classId : Nat) : async [Topic] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can browse topics");
    };

    topics.values().toArray().filter(
      func(topic) { topic.chapterId == chapterId and topic.subjectId == subjectId and topic.classId == ?classId }
    );
  };

  // Topic progress tracking - student only
  public query ({ caller }) func getMyProgress() : async [TopicProgressEntry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view their progress");
    };
    topicProgress.values().toArray();
  };

  // admin only: Get progress for any student
  public query ({ caller }) func getStudentProgress(studentPrincipal : Principal) : async [TopicProgressEntry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view student progress");
    };
    topicProgress.values().toArray();
  };

  // Admin stats
  public query ({ caller }) func getAdminStats() : async AdminStats {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view stats");
    };

    {
      totalStudents = 0;
      activeToday = 0;
      topicsCompletedTotal = 0;
    };
  };

  // Public query functions (no auth required)
  public query func getAllClasses() : async [Text] {
    classIds.toArray();
  };

  public query func getAllChapters() : async [Chapter] {
    chapters.values().toArray();
  };
};
