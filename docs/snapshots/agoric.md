---
sidebar_label: 'Agoric'
sidebar_position: 8
slug: cosmos-agoric-snapshot
title: Agoric
description: Smart-Contract Platform
---

Download daily snapshot:

| LATEST HEIGHT | SIZE | CHAIN ID | PRUNING | DATE | TIME | LINK |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 222222 | 25GB | junod-1 | 11.02.2023 | archive | 03:10 | [junod-1_11.02.2023.tar](https://download.snapshots.stakecraft.com/junod/junod-1_11.02.2023.tar.gz) |


## Instructions
:::tip Our tips
We are providing several commands in order to download and extract the snapshot to its corresponding place. Don't hesitate to adjust the commands according to your setup.
:::

### Stop the service:

```bash
sudo systemctl stop agd.service
```

:::danger Back up your priv_validator_state.json
Please make sure you have a copy of priv_validator_state.json from data folder. 
:::

1. Backup priv_validator_state.json:
```bash
cp $HOME/.agd/data/priv_validator_state.json $HOME/priv_validator_state.json
```

2. Delete the data:
```bash
agd tendermint unsafe-reset-all --home $HOME/.agd
```

### Download the snapshot archive:

```bash
wget -O - https://download.snapshots.stakecraft.com/juno/juno-1_11.02.2023.tar.gz | tar -xvf -C ~/.junod/data/
```

### Copy your priv_validator_state.json to its original place:
```bash
mv $HOME/priv_validator_state.json $HOME/.agd/data/priv_validator_state.json
```

### Start service and check the logs:

```bash
sudo systemctl start agd.service
sudo journalctl -u agd.service -f
```