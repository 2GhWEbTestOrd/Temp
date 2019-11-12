          className={`${styles.circle} ${
              isHovered || item === this.state.selected ? styles.visible : null
            }`}
          />
          <div className={styles.projectNameList}>{project.name}</div>
        </div>
      );
    }
    return (
      <div className={`${styles.cellContainer} ${styles.addCell}`}>
        + ADD PROJECTS
      </div>
    );
  };

  renderSelectedItem = (item, isOpened) => {
    const project = item ? this.projectForKey(item) : null;
    return (
      <SelectedCell isOpen={isOpened}>
        <div className={styles.projectName}>
          {project ? project.name
