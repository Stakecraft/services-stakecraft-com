---
sidebar_label: 'Shiden'
sidebar_position: 2
slug: substrate-shiden-snapshot
title: Shiden
description: Shiden network fullnode snapshot
---

Download daily snapshot:

| LATEST HEIGHT | SIZE | CHAIN ID | PRUNING | DATE | TIME | LINK |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 222222 | 25GB | shiden-1 | 11.02.2023 | archive | 03:10 | [shiden-1_11.02.2023.tar](https://download.snapshots.stakecraft.com/shiden/shiden-1_11.02.2023.tar.gz) |
| 110000 | 34GB | shiden-1 | 10.02.2023 | 1000 | 03:10 | [shiden-1_10.02.2023.tar](https://download.snapshots.stakecraft.com/shiden/shiden-1_10.02.2023.tar.gz) |


## Instructions
:::tip Our tips
We are providing several commands in order to download and extract the snapshot to its corresponding place. Don't hesitate to adjust the commands according to your setup.
:::

### Stop the service:

```bash
sudo systemctl stop shiden.service
```

:::danger Back up your session keys
Please make sure you have a copy of the session keys in case you mess up with snapshot location. 
:::

### Download the snapshot archive:

```bash
wget -O - https://download.snapshots.stakecraft.com/shiden/shiden-1_11.02.2023.tar.gz | tar -xzvf -C ~/.local/share/shiden/
```

### Start service and check the logs:

```bash
sudo systemctl start shiden.service
sudo journalctl -u shiden.service -f
```