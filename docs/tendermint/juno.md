---
sidebar_label: 'Juno'
sidebar_position: 1
slug: juno-snapshot
title: Juno page title!
description: Smart-Contract Platform
---

# Juno Validator Node Snapshot
**<center>Chain ID: juno-1 | Binary Version: 10.0 | Binary Hash: gngdg56y5gyhth65hfg</center>**

About Juno project



> ![GitHub Logo](/img/logo.svg) Juno is decentralize smartcontract platform. gdgdgdgdfg gdfgdf. Dggdgdfg gtgfgdg dgthf. Dgdfggfhf. dfgdfg gdgh gfh egdfg.

We take a node snapshot every day. We then delete all the previous snapshots to free up the space on the file server.

The snapshot is designed for node opeartors to run an efficient validator service on Juno chain. To make the snapshot as small as possible while still viable as a validator, we use the following setting to save on the disk space.
```
    node 
    params 
    are 
    here
```
We suggest you make the same adjustment on your node too. Please notice that your node will have very limited functionality beyond signing blocks with the efficient disk space utilization. For example, your node **will not be able** to serve as a **RPC endpoint** (which is not suggested to run on a validator node anyway).

:::tip Please note
Mare you have installed next system packages:

* tar
* lz4
* wget

You can install them using command below:
```
sudo apt-get install tar lz4 wget
```
:::

| BLOCK HEIGHT | SIZE  | DOWNLOAD |
| -------      | ---   | ---      |
| 5619756      | 332MB | [juno_5619756.tar.lz4](https://snapshots.stakecraft.com/juno-5604566.tar.gz) |

:::tip Our tip
You can click on copy button on the right side!
:::
```bash
wget -O - https://snapshots.stakecraft.com/juno-5604566.tar.gz | tar -xzvf -C ~/.juno/
```