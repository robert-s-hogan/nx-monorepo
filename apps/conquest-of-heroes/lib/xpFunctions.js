export function getPlayerLevel(xp) {
  let level = 0;
  if (xp >= 0 && xp <= 299) {
    return (level = 1);
  } else if (xp >= 300 && xp <= 899) {
    return (level = 2);
  } else if (xp >= 900 && xp <= 2699) {
    return 3;
  } else if (xp >= 2700 && xp <= 6499) {
    return (level = 4);
  } else if (xp >= 6500 && xp <= 13999) {
    return (level = 5);
  } else if (xp >= 14000 && xp <= 22999) {
    return (level = 6);
  } else if (xp >= 23000 && xp <= 33999) {
    return (level = 7);
  } else if (xp >= 34000 && xp <= 47999) {
    return (level = 8);
  } else if (xp >= 48000 && xp <= 63999) {
    return (level = 9);
  } else if (xp >= 64000 && xp <= 84999) {
    return (level = 10);
  } else if (xp >= 85000 && xp <= 99999) {
    return (level = 11);
  } else if (xp >= 100000 && xp <= 119999) {
    return (level = 12);
  } else if (xp >= 120000 && xp <= 139999) {
    return (level = 13);
  } else if (xp >= 140000 && xp <= 164999) {
    return (level = 14);
  } else if (xp >= 165000 && xp <= 194999) {
    return (level = 15);
  } else if (xp >= 195000 && xp <= 224999) {
    return (level = 16);
  } else if (xp >= 250000 && xp <= 264999) {
    return (level = 17);
  } else if (xp >= 265000 && xp <= 304999) {
    return (level = 18);
  } else if (xp >= 305000 && xp <= 354999) {
    return (level = 19);
  } else {
    return (level = 20);
  }
}

export function getAdventuringDayXPLimit(playerLevel) {
  let level = playerLevel;
  if (level === 1) {
    return 300;
  } else if (level === 2) {
    return 600;
  } else if (level === 3) {
    return 1200;
  } else if (level === 4) {
    return 1700;
  } else if (level === 5) {
    return 3500;
  } else if (level === 6) {
    return 4000;
  } else if (level === 7) {
    return 5000;
  } else if (level === 8) {
    return 6000;
  } else if (level === 9) {
    return 7500;
  } else if (level === 10) {
    return 9000;
  } else if (level === 11) {
    return 10500;
  } else if (level === 12) {
    return 11500;
  } else if (level === 13) {
    return 13500;
  } else if (level === 14) {
    return 15000;
  } else if (level === 15) {
    return 18000;
  } else if (level === 16) {
    return 20000;
  } else if (level === 17) {
    return 25000;
  } else if (level === 18) {
    return 27000;
  } else if (level === 19) {
    return 30000;
  } else {
    return 40000;
  }
}

export function getEncounterMultipliers(difficulty, playerCount) {
  let difficultyMultiplier = 0;
  if (playerCount === 1) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 25);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 50);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 75);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 100);
    }
  }

  if (playerCount === 2) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 50);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 100);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 150);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 200);
    }
  }

  if (playerCount === 3) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 75);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 150);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 225);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 400);
    }
  }

  if (playerCount === 4) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 125);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 250);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 375);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 500);
    }
  }

  if (playerCount === 5) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 250);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 500);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 750);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 1100);
    }
  }

  if (playerCount === 6) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 300);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 600);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 900);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 1400);
    }
  }

  if (playerCount === 7) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 350);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 700);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 1100);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 1700);
    }
  }

  if (playerCount === 8) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 450);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 900);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 1400);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 2100);
    }
  }

  if (playerCount === 9) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 550);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 1100);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 1600);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 2400);
    }
  }

  if (playerCount === 10) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 600);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 1200);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 1900);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 2800);
    }
  }

  if (playerCount === 11) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 800);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 1600);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 2400);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 3600);
    }
  }

  if (playerCount === 12) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 1000);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 2000);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 3000);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 4500);
    }
  }

  if (playerCount === 13) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 1100);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 2200);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 3400);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 5100);
    }
  }

  if (playerCount === 14) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 1250);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 2500);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 3800);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 5700);
    }
  }

  if (playerCount === 15) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 1400);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 2800);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 4300);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 6400);
    }
  }

  if (playerCount === 16) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 1600);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 3200);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 4800);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 7200);
    }
  }

  if (playerCount === 17) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 2000);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 3900);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 5900);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 8800);
    }
  }

  if (playerCount === 18) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 2100);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 4200);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 6300);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 9500);
    }
  }

  if (playerCount === 19) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 2400);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 4900);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 7300);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 10900);
    }
  }

  if (playerCount === 20) {
    if (difficulty === 0) {
      return (difficultyMultiplier = 2800);
    } else if (difficulty === 1) {
      return (difficultyMultiplier = 5700);
    } else if (difficulty === 2) {
      return (difficultyMultiplier = 8500);
    } else if (difficulty === 3) {
      return (difficultyMultiplier = 12700);
    }
  }
}

export function adventuringDayXp(playerLevel) {
  if (playerLevel === 1) {
    return 300;
  } else if (playerLevel === 2) {
    return 600;
  } else if (playerLevel === 3) {
    return 1200;
  } else if (playerLevel === 4) {
    return 1700;
  } else if (playerLevel === 5) {
    console.log(`playerLevel5: ${playerLevel}`);
    return 3500;
  } else if (playerLevel === 6) {
    return 4000;
  } else if (playerLevel === 7) {
    return 5000;
  } else if (playerLevel === 8) {
    return 6000;
  } else if (playerLevel === 9) {
    return 7500;
  } else if (playerLevel === 10) {
    return 9000;
  } else if (playerLevel === 11) {
    return 10500;
  } else if (playerLevel === 12) {
    return 11500;
  } else if (playerLevel === 13) {
    return 13500;
  } else if (playerLevel === 14) {
    return 15000;
  } else if (playerLevel === 15) {
    return 18000;
  } else if (playerLevel === 16) {
    return 20000;
  } else if (playerLevel === 17) {
    return 25000;
  } else if (playerLevel === 18) {
    return 27000;
  } else if (playerLevel === 19) {
    return 30000;
  } else if (playerLevel === 20) {
    return 40000;
  }
}
