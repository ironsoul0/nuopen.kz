class Cache {
  constructor() {
    this.participants = null;
  }

  setParticipants(newParticipants) {
    this.participants = [...newParticipants];
  }
}

export default new Cache();
