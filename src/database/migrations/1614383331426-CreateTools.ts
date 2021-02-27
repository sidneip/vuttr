import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTools1614383331426 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tools',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid'
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'link',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        isNullable: false
                    },
                    {
                        name: 'tags',
                        type: 'jsonb'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tools')
    }

}
