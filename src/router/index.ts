function shout(what : string | null){
  if (what){
      const loud = what.toUpperCase();
      console.log(loud);
  }
}