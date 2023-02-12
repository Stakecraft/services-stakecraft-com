---
sidebar_label: 'Astar'
sidebar_position: 1
slug: substrate-astar-snapshot
title: Astar
description: Astar network fullnode snapshot
---

Download daily snapshot:

| LATEST HEIGHT | SIZE | CHAIN ID | PRUNING | DATE | TIME | LINK |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 111111 | 35GB | astar-1 | 11.02.2023 | archive | 03:10 | [astar-1_11.02.2023.tar](https://download.snapshots.stakecraft.com/astar/astar-1_11.02.2023.tar.gz) |
| 110000 | 34GB | astar-1 | 10.02.2023 | 1000 | 03:10 | [astar-1_10.02.2023.tar](https://download.snapshots.stakecraft.com/astar/astar-1_10.02.2023.tar.gz) |


## Instructions
:::tip Our tips
We are providing several commands in order to download and extract the snapshot to its corresponding place. Don't hesitate to adjust the commands according to your setup.
:::

### Stop the service:

```bash
sudo systemctl stop astar.service
```

:::danger Back up your session keys
Please make sure you have a copy of the session keys in case you mess up with snapshot location. 
:::

### Download the snapshot archive:

```bash
wget -O - https://download.snapshots.stakecraft.com/astar/astar-1_11.02.2023.tar.gz | tar -xzvf -C ~/.local/share/astar/
```

### Start service and check the logs:

```bash
sudo systemctl start astar.service
sudo journalctl -u astar.service -f
```