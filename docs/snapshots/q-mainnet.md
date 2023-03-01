---
sidebar_label: 'Q-Mainnet'
sidebar_position: 5
slug: q-mainnet-snapshot
title: Q-Mainnet
description: Q network mainnet snapshot
---

Download daily snapshot:

| LATEST HEIGHT | SIZE | CHAIN ID | PRUNING | DATE | TIME | LINK |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 5893886 | 2.9G | q-mainnet | archive | 2023-02-27 | 19:13:10 | [q-mainnet_2023-02-27.tar](https://snapshots.stakecraft.com/q-mainnet_2023-02-27.tar) |


## Instructions
:::tip Our tips
We are providing several commands in order to download and extract the snapshot to its corresponding place. Don't hesitate to adjust the commands according to your setup.
:::

### Stop the service:

```bash
cd mainnet-public-tools/validator
```

:::danger Back up your keystore directory
Please make sure you have a copy of the keys in case you mess up with snapshot location.
:::

### Remove the old chaindata folder
```bash
docker-compose down
sudo rm -rf /var/lib/docker/volumes/validator_node-data/_data/geth/chaindata
sudo mkdir /var/lib/docker/volumes/validator_node-data/_data/geth/chaindata
```

### Download the snapshot archive:

```bash
wget -O - https://snapshots.stakecraft.com/q-mainnet_2023-02-27.tar | tar -xzvf -C /var/lib/docker/volumes/validator_node-data/_data/geth/chaindata
```

### Start service and check the logs:

```bash
docker-compose up -d
docker-compose logs -f
```