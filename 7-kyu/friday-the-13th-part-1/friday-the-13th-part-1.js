function killcount(counselors, jason){
  return counselors
      .filter((counselor) => counselor[1] < jason)
      .map((counselor) => counselor[0]);
}